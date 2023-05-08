import type { ChangeEventHandler, Dispatch, SetStateAction } from "react";

type QuoteFilterProps = {
  filters: QuoteFilters;
  setFilters: Dispatch<
    SetStateAction<QuoteFilters>
  >;
};

const QuoteFilter = ({ filters, setFilters }: QuoteFilterProps) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
  setFilters((filters) => ({
    ...filters,
    [e.target.name]: e.target.value,
  }))
  return (
    <section className="flex gap-4">
      <label htmlFor="content-filter">
        Filter by quote content
        <input
          id="content-filter"
          name="content"
          value={filters.content}
          onChange={onChange}
          placeholder="Filter by quote content"
        />
      </label>
      <label htmlFor="source-filter">
        Filter by source
        <input
          id="source-filter"
          name="source"
          value={filters.source}
          onChange={onChange}
          placeholder="Filter by source"
        />
      </label>
    </section>
  );
};

export default QuoteFilter;
