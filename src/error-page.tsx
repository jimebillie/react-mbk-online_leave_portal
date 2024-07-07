import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center flex-col items-center">
      <h1 className="text-6xl mt-5">{error.status}</h1>
      <p>
          Sorry, {error.statusText}
      </p>
    </div>
  );
}