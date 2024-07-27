import { ModeToggle } from "@/components/mode-toggle";
import { getSiteContext } from "@/lib/general-utils";
import HomeModule from "@/modules/Home";

export default async function Home() {
  const context = getSiteContext()

  return (
    <>
      <HomeModule context={context} />
      <ModeToggle />
    </>
  )
}
