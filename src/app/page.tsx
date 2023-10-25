import { Image } from "@nextui-org/image"
import { Link } from "@nextui-org/link"

import NextImage from "next/image"
import NextLink from "next/link"

import { mainFrameworks, mainLangs, otherTech, platforms } from "@/components/icons"

import { subtitle, title } from "@/components/primitives"

import { cn } from "@/lib"
import { button as buttonStyles } from "@nextui-org/theme"

type SectionComponentProps = React.HTMLAttributes<HTMLDivElement> & {
    justify?: "evenly" | "around" | "between" | "center"
}

const Section: React.FC<SectionComponentProps> = ({ children, justify, className }) => (
    <section
        className={cn(
            "flex flex-col lg:flex-row w-full items-center",
            justify === "evenly" ? "justify-evenly" : "",
            justify === "around" ? "justify-around" : "",
            justify === "between" ? "justify-between" : "",
            justify === "center" ? "justify-center" : "",
            className
        )}
    >
        {children}
    </section>
)

export default function HomePage() {
    return (
        <>
            <Section justify="around">
                <div className="space-y-8">
                    <div className="space-y-8">
                        <h1>
                            <span className={subtitle({ class: "mt-0" })}>Welcome, I&apos;m</span>
                            <strong className={title({ color: "violet", class: "-ml-0.5" })}>
                                Christopher Spencer
                            </strong>
                        </h1>
                        <h2 className={title({ class: "block text-default-600", size: "sm" })}>I build web apps</h2>
                    </div>

                    <div className="flex gap-4 items-center justify-between">
                        <Image
                            as={NextImage}
                            src="/assets/headshot.webp"
                            alt="Headshot of Christopher Spencer"
                            width={400}
                            height={400}
                            classNames={{
                                wrapper: "lg:hidden dark:ring-2 dark:ring-default-50 headshot-flair-sm mb-4 mr-6 isolate",
                                img: "w-32 h-32",
                            }}
                        />
                        <div className="flex flex-col lg:flex-row gap-8">
                            <Link
                                as={NextLink}
                                href="/"
                                className={buttonStyles({ color: "primary", variant: "shadow" })}
                            >
                                Get In Touch
                            </Link>
                            <Link
                                as={NextLink}
                                className={buttonStyles({ color: "primary", variant: "ghost" })}
                                href="#"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
                <Image
                    as={NextImage}
                    src="/assets/headshot.webp"
                    alt="Headshot of Christopher Spencer"
                    width={400}
                    height={400}
                    classNames={{
                        wrapper: "max-lg:hidden dark:ring-2 dark:ring-default-50 headshot-flair-lg mb-4 isolate",
                        img: "w-full h-full",
                    }}
                />
            </Section>
            <Section
                justify="evenly"
                className="gap-20"
            >
                <div className="space-y-4">
                    <h3 className={title({ size: "sm", className: "flex justify-center" })}>Main Tech Stack</h3>
                    <ul className="grid grid-cols-4">
                        {mainLangs.map(({ icon, text }, i) => (
                            <li
                                key={i}
                                className="flex flex-col items-center"
                            >
                                {icon({ className: "w-1/2 overflow-visible" })}
                                <span className="-mt-4">{text}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="grid grid-cols-4">
                        {mainFrameworks.map(({ icon, text }, i) => (
                            <li
                                key={i}
                                className="flex flex-col items-center"
                            >
                                {icon({ className: "w-1/2 overflow-visible" })}
                                <span className="-mt-4">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4 !mt-0">
                    <h3 className={title({ size: "sm", className: "flex justify-center" })}>Other Technologies</h3>
                    <ul className="grid grid-cols-4">
                        {otherTech.map(({ icon, text }, i) => (
                            <li
                                key={i}
                                className="flex flex-col items-center"
                            >
                                {icon({ className: "w-1/2 overflow-visible" })}
                                <span className="-mt-4">{text}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="grid grid-cols-4">
                        {platforms.map(({ icon, text }, i) => (
                            <li
                                key={i}
                                className="flex flex-col items-center"
                            >
                                {icon({ className: "w-1/2 overflow-visible" })}
                                <span className="-mt-4">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
            <Section>
                <h3 className={title({ size: "sm" })}>Portfolio</h3>
            </Section>
        </>
    )
}
