import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import React, { useState } from "react";
import { Button } from "../Button";
interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      onSubmit(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.search}>
        <SearchIcon />
        <input
          type="text"
          value={value}
          className={styles.input}
          name="username"
          placeholder="Search GitHub username ..."
          onChange={(e) => setValue(e.target.value)}
        />
        {hasError && <p className={styles.error}>No result</p>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
