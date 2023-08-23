import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../app/services/booksApi";
import { BookContainer } from "../types";
import BookCard from "./BookCard";

interface Props {}

const BooksList: FC<Props> = () => {
  const { data, isLoading } = useGetBooksQuery({});

  if (!data) return null;

  return (
    <Stack gap={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">My Books</Typography>
        <Link to="/search">
          <Button>Find a book</Button>
        </Link>
      </Box>

      {isLoading && <Typography>Loading...</Typography>}
      {!isLoading && (
        <Grid container spacing={2}>
          {data.data?.map((bookProps: BookContainer) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={bookProps.book.isbn}
            >
              <BookCard {...bookProps} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default BooksList;
