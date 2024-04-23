import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Index() {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return <SliceZone slices={home.data.slices} components={components} />;
}
