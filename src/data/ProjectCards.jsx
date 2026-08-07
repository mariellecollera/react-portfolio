const projects = [
  {
    id: 1,
    bgClass: "bg-shift-1",
    title: "StallionScore",
    image: "/stallionscore.png",
    cardText:
      "High-fidelity wireframes for StallionScore, a rating and feedback platform for anything related to De La Salle Lipa.",
    stack: "Figma",
    description: (
      <>
        <p>
          StallionScore serves as a platform to systematically rate, review,
          and access feedback about De La Salle Lipa. It was conceptualized
          as a final project in our Human Computer Interaction course, where
          the main focus was on creating a user-friendly interface for the
          application.
        </p>
        <p>
          Check out the Figma prototype{" "}
          <a
            href="https://www.figma.com/proto/VcHA6pRWsBPjvAimQBKlud/Group4_StallionScore?node-id=78-4082&p=f&t=tnbqrKZdQ16tCPXt-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=78%3A4082"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </>
    ),
    groupMembers: "Marielle Collera, Justin Panotes, Louise Marquez, Wallace Ramos",
  },
  {
    id: 2,
    bgClass: "bg-shift-2",
    title: "KARipas",
    image: "/karipas.png",
    cardText:
      "High-fidelity wireframes for KARipas, an AI Camera-Based Traffic Light Control System.",
    stack: "Figma",
    description: (
      <>
        <p>
          KARipas is a traffic management system proposed as a final project
          in our Algorithms and Complexity course. I worked on its user
          interface design as a member of a group of four students.
        </p>
        <p>
          Check out the Figma prototype{" "}
          <a
            href="https://www.figma.com/design/GyEoNt6MDx8zNdN2605MEu/KARipas?node-id=0-1&t=VJgunh6PdalcvmKi-1"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </>
    ),
    groupMembers: "Marielle Collera, Marcus Lantin, Justin Panotes, Wallace Ramos",
  },
  {
    id: 3,
    bgClass: "bg-shift-3",
    title: "Birthday Greeting Webpage",
    image: "/bday_greeting.png",
    cardText:
      "An interactive birthday webpage with a blow-to-light-candles animation (open-sourced) and draggable elements.",
    stack: "HTML, CSS, JavaScript",
    description: (
      <p>
        A webpage where the birthday celebrant lights a virtual cake and
        blows out the candles before being able to drag the message cards
        around the screen.
        <br />
        <strong>Note:</strong> The interactive cake animation and its
        JavaScript implementation are adapted from the open-source work of{" "}
        <a href="https://github.com/alelthomas" target="_blank" rel="noreferrer">
          alelthomas
        </a>
        . I designed the page and added the draggable message cards.
      </p>
    ),
    groupMembers: null,
  },
];

export default projects;
