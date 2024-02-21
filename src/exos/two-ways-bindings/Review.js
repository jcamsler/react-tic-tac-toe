export default function Review({ feedback, name }) {
    return (
      <figure>
        <blockquote>
          <p>{feedback}</p>
        </blockquote>
        <figcaption>{name}</figcaption>
      </figure>
    );
  }
  