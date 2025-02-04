export const Article = ({ title, content }) => {
      
    return (
      <div>
        <h2>{title}</h2>
        {content.map((section, index) => {
          if (section.type === 'paragraph') {
            return <p key={index}>{section.text}</p>;
          } else if (section.type === 'list') {
            return (
              <ul key={index}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    );
  };