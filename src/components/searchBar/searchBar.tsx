import React, { useState } from "react";
import { SearchBarProps } from "./searchBar.types";
import { TextField, Button, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() && query.length) {
      onSearch(query);
      setQuery("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      gap={2}
    >
      <TextField
        variant="outlined"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search weather for any city"
        size="small"
        sx={{
          width: "300px",
          backgroundColor: "background.paper",
          borderRadius: ".5rem",
          "& .MuiOutlinedInput-root": {
            borderRadius: ".5rem",
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          },
          htmlInput: {
            "data-testid": "search-input",
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        data-testid="search-button"
        sx={{
          borderRadius: ".5rem",
          paddingX: 3,
          paddingY: 1,
          fontWeight: "bold",
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
