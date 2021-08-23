import useFetch from "./Hook/useFetch";
import { dataType } from "./Types";

const apiBaseUrl: string = "https://api.github.com";

const url: string = `${apiBaseUrl}/orgs/facebook/repos?sort=created`;

export const CustomHookApiCall = () => {
  const { data, isFetching, error } = useFetch(url);

  if (isFetching) {
    return <p>"Loading..."</p>;
  }

  if (error.hasError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {data.length > 0 ? (
        data.map(({ name, html_url }: dataType) => (
          <div key={html_url}>
            <p>
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </>
  );
};
