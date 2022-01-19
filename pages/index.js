import { Suspense, useState, useEffect } from "react";
import { suspend } from "suspend-react";

let isServer = typeof window === "undefined";
export default function Home() {
  let [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  if (isServer || isFirstRender) {
    return null;
  }

  return (
    <>
      {/* This is giving me an error but I'm not seeing the Next.js error overlay. */}
      <Inner />

      {/* This fixes the bug, so I'm expecting to see the "Add a Suspense boundary" message above. */}
      {/* <Suspense fallback={<p>loading</p>}>
        <Inner />
      </Suspense> */}
    </>
  );
}

function Inner() {
  suspend(async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }, []);

  return <p>hi</p>;
}
