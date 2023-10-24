// import { Code } from "@nextui-org/code"
import { Image } from "@nextui-org/image"
import { Link } from "@nextui-org/link"
// import { Snippet } from "@nextui-org/snippet"

import NextImage from "next/image"
import NextLink from "next/link"

// import headshot from "@/assets/headshot.webp"
// import { GithubIcon } from "@/components/icons"
import { subtitle, title } from "@/components/primitives"

// import { siteConfig } from "@/config/site"
import { cn } from "@/lib"
import { button as buttonStyles } from "@nextui-org/theme"

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className }) => (
    <section className={cn("space-y-8", className)}>{children}</section>
)

// <div className="flex items-center justify-center gap-4 py-8 md:py-10">
// </div>
export default function HomePage() {
    return (
        <Section className="flex flex-col lg:flex-row lg:gap-x-8">
            <div className="space-y-8">
                <div className="space-y-8">
                    <h1 className="space-y-2">
                        <span className={subtitle()}>Welcome, I&apos;m</span>
                        <strong className={title({ color: "violet", class: "-ml-0.5" })}>
                            Christopher Spencer
                        </strong>
                    </h1>
                    <h2 className={title({ class: "block text-default-600", size: "sm" })}>I build web apps</h2>
                </div>

                <div className="flex gap-4">
                    <Link
                        isExternal
                        as={NextLink}
                        href="/"
                        className={buttonStyles({ color: "primary", variant: "shadow" })}
                    >
                        Get In Touch
                    </Link>

                    {/* <Link */}
                    {/*     isExternal */}
                    {/*     as={NextLink} */}
                    {/*     className={buttonStyles({ variant: "bordered" })} */}
                    {/*     href={siteConfig.links.github} */}
                    {/* > */}
                    {/*     <GithubIcon size={20} /> */}
                    {/*     GitHub */}
                    {/* </Link> */}
                </div>
            </div>
            {/* <div> */}
            {/*     <Snippet */}
            {/*         hideSymbol */}
            {/*         hideCopyButton */}
            {/*         variant="flat" */}
            {/*     > */}
            {/*         <span> */}
            {/*             Get started by editing <Code color="primary">app/page.tsx</Code> */}
            {/*         </span> */}
            {/*     </Snippet> */}
            {/* </div> */}
            <Image
                as={NextImage}
                src="/assets/headshot.webp"
                alt="Headshot of Christopher Spencer"
                width={400}
                height={400}
                // shadow="lg"
                classNames={{
                    wrapper: "dark:ring-2 dark:ring-default-50 headshot-flair translate max-lg:!mt-14 lg:!ml-8",
                    img: "w-full h-full",
                }}
            />
        </Section>
    )
}

    {/* <Section className="w-full h-full"> */ }
    {/*     <Image */ }
    {/*         as={NextImage} */ }
    {/*         fill */ }
    {/*         src="/assets/headshot.webp" */ }
    {/*         alt="Headshot of Christopher Spencer" */ }
    {/*     /> */ }
    {/* </Section> */ }
