// HeroUI.
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

// Config.
import { siteConfig } from "@/config/site";

// Components.
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

// Layouts.
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>
            Front-end developer building&nbsp;
            <span className={title({ color: "yellow" })}>fast</span>,&nbsp;
            <span className={title({ color: "blue" })}>accessible</span>,
            and&nbsp;
            <span className={title({ color: "violet" })}>beautiful</span> web
            experiences.
          </span>
          <br />
          <div className={subtitle({ class: "mt-10" })}>
            Explore some things I’ve built.
          </div>
        </div>

        <div className="flex gap-3">
          {/* <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.navItems[1].href}
          >
            Projects
          </Link> */}
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
