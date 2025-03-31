export default function Intro(props: {name1:string; name2:string}) {
        return (
            <div className={"introduction"}>
                <p>Hello we are {props.name1} & {props.name2}! Welcome to our hobby page! Our hobbies are Nail Art and Ballroom
                    Dancing </p>
            </div>
        )
}