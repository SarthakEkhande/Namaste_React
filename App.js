const parent=React.createElement(
"div",
{id:"parent"},
[
    React.createElement("div",{id:"child"},
[
    React.createElement("h1",{id:"h1"},"I am a h1"),
    React.createElement("h2",{id:"h2"},"I am a h2")]
),
React.createElement("div",{id:"child2"},
[
    React.createElement("h1",{id:"h1"},"I am a h1"),
    React.createElement("h2",{id:"h2"},"I am a h2")]
)
]
);

// const heading= React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from react!")

 console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent) 