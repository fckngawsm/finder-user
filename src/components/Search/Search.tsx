import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import React, { useState } from "react";
import { Button } from "../Button";
interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}
type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.username.value;
    if (text) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  };
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
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
    </form>
  );
};
