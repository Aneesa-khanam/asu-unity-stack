// @ts-check
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";

import { trackGAEvent } from "../../../../../../shared";
import { CLASS_NAMES } from "../../../core/constants/classNames";
import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { Button } from "../../Button";
import { SearchWrapper } from "./index.styles";
import { SearchInput } from "./SearchInput";

const SEARCH_GA_EVENT = {
  event: "search",
  action: "type",
  name: "onenter",
  type: "main search",
  region: "navbar",
  section: "topbar",
};

function formatQueryParamValue(format, str) {
  if (typeof format === "string" && format.includes("x-www-form-urlencoded")) {
    return encodeURIComponent(str)
      .replace(/%20/g, "+")
      .replace(/%2B/g, "+")
      .trim();
  }

  if (typeof str === "string") {
    return str.trim();
  }

  return str;
}

const Search = () => {
// console.log("✅ Search component mounted");
  const {
    universalNavbar,
    breakpoint,
    searchUrl = "",
    site = "",
  } = useAppContext();
  const placeholder = universalNavbar?.searchPlaceholder ?? "Search asu.edu";
  const isMobile = useIsMobile(breakpoint);
  /** @type {React.MutableRefObject<HTMLInputElement | null>} */
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hasInputValue, setHasInputValue] = useState(false);
  // const formRef = useRef(null);

  // console.log("Search state:", {
  //   breakpoint,
  //   isMobile,
  //   searchUrl,
  //   site,
  // });

  useEffect(() => {
  //  console.log("Search useEffect", {
  //     open,
  //     isMobile,
  //   });
    if (open && typeof inputRef?.current?.focus === "function") {
      inputRef.current.focus();
    }
  }, [open]);

  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSearch = e => {
    e.preventDefault();

    const form = e.currentTarget;

    // Fire GA event first
    trackGAEvent({
      ...SEARCH_GA_EVENT,
      text: inputValue,
    });

    // Submit after a short delay (same behaviour as old component)
    setTimeout(() => {
      if (form instanceof HTMLFormElement) {
        form.submit();
      }
    }, 100);
  };

  const handleChangeVisibility = () => {
    setOpen(prevState => {
      const newState = !prevState;

      trackGAEvent({
        ...SEARCH_GA_EVENT,
        event: "link",
        action: "click",
        name: "onclick",
        text: newState ? "search icon" : "close search icon",
      });
      return newState;
    });
  };
  return (
    <search>
      <SearchWrapper
        // @ts-ignore
        breakpoint={breakpoint}
        action={searchUrl}
        onSubmit={handleSearch}
        method="get"
        name="gs"
        className={open ? CLASS_NAMES.OPEN_SEARCH : ""}
        data-testid="universal-nav-search-form"
        role="search"
      >
        {!isMobile ? (
          <>
            {!open && (
              <button
                type="button"
                aria-label="Search sundevils.com"
                onClick={handleChangeVisibility}
                className={CLASS_NAMES.SEARCH_BUTTON}
                data-testid="search-button"
              >
                <span>Search</span>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            )}
            {open && (
              <>
                <SearchInput
                  inputRef={inputRef}
                  hasInputValue={hasInputValue}
                  setHasInputValue={setHasInputValue}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  placeholder={placeholder}
                  isMobile={isMobile}
                  onBlur={() => {
                    if (!hasInputValue) {
                      setOpen(false);
                    }
                  }}
                />
                <Button
                  color="dark"
                  text="Search"
                  as="button"
                  classes={CLASS_NAMES.SUBMIT_BUTTON}
                  onClick={() => {
                    inputRef.current?.form?.requestSubmit();
                  }}
                />
              </>
            )}
          </>
        ) : (
          <label>
            <SearchInput
              inputRef={inputRef}
              hasInputValue={hasInputValue}
              setHasInputValue={setHasInputValue}
              inputValue={inputValue}
              setInputValue={setInputValue}
              placeholder={placeholder}
              isMobile={isMobile}
            />
          </label>
        )}
        <input
          name={universalNavbar?.searchUrlQueryParam ?? "q"}
          value={formatQueryParamValue(
            universalNavbar?.searchUrlQueryParamValueFormat,
            inputValue
          )}
          type="hidden"
        />
        <input name="url_host" value={site} type="hidden" />
        <input name="site" value="default_collection" type="hidden" />
        <input name="sort" value="date:D:L:d1" type="hidden" />
        <input name="output" value="xml_no_dtd" type="hidden" />
        <input name="ie" value="UTF-8" type="hidden" />
        <input name="oe" value="UTF-8" type="hidden" />
        <input name="client" value="asu_frontend" type="hidden" />
        <input name="proxystylesheet" value="asu_frontend" type="hidden" />
      </SearchWrapper>
    </search>
  );
};

export { Search };
