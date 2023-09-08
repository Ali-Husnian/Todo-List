import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Ali Husnain");
  const [isPanding ,setIsPanding] = useState(false);
  const history = useHistory();

  const heandleSubmit = (e) => {
    e.preventDefault();
    const blog = { title , body , author};

    setIsPanding(true); 

    fetch('http://localhost:8000/blogs',{
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body : JSON.stringify(blog)
    })
    .then(() =>{
        // history.go(-1)
        history.push('/');
    });
  };
  return (
    <div className="create">
      <h3>Add a New Blog</h3>
      <form onSubmit={heandleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="Ali Husnain">Ali Husnain</option>
        </select>
        { !isPanding && <button>Add Blog</button>}
        { isPanding && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
