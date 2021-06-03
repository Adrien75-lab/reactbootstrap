import React,{ useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import {FaHeart} from "react-icons/fa";
const Like = () => {
    const [count, setCount] = useState(0);
    const [liked, setLike] = useState(false);
    const [display, setDisplay] = useState(true);
  
    useEffect(() => {
      if (count > 0) console.log(`you liked ${count} times`);
      if (count === 20) {alert("Arretes de liker !")
      setDisplay(false)
    }
    }, [count]);
    useEffect(() => {
      if (liked) console.log(`you cliked liked ! ${liked.toString()}`);
    }, [liked]);
  
    return (
      <>
        {(() =>
          display ? (
            <button onClick={() => setCount(count + 1)}><FaHeart />{count} Likes(s)</button>
          ) : (
            <span> {count} likes </span>
          ))()}
        <br />
  
        <button onClick={() => setLike(!liked)}> Liked {liked.toString()}</button>
      </>
    );
  };
  // composant fonction form
  const Form = ({id}) => {
    const handleSubmit = (e) => {
    // Ne pas poster le formulaire
    
    e.preventDefault()
    fetch('http://localhost:8000/form',{
      method:'post',
      cors:'no-cors',
      body:e.target.text.value
    })
    .then(response=>response)
    .then(data=>{
      console.log(data)
    })
    e.target.reset()
    }
    
    return(
      // utilisation de cette methode a l'interieur du formulaire
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name="text" />
        <input type="hidden" name="id" value={id} />
        <input type="submit" value="comment" />
      </form>
    )
  }
  
  class PortfolioPage extends React.Component {
    state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  
    componentDidMount() {
      console.log("componentDidMount");
  
      fetch("https://dekpo.herokuapp.com/posts")
        .then((response) => response.json())
        .then(
          (data) => {
            this.setState({
              isLoaded: true,
              items: data,
            });
            console.log("Fetch success", data);
          },
          (error) => {
            this.setState({
              error: error,
            });
            console.log(error);
          }
        );
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
  
      if (error) {
        return <div>Oups ERROR</div>;
      } else if (!isLoaded) {
        return <div>Chargement toujours en cours...</div>;
      } else {
        return items.map((item) => (
          <article key={item._id}>
            <p>
              <Like />
            </p>
            <NavLink to={"/Article/" + item._id}>
              {(() => {
                if (item.img) {
                  return (
                    <img
                      src={"https://dekpo.herokuapp.com/posts/" + item.img}
                      width="100"
                      alt={item.title}
                    />
                  );
                }
              })()}
              <p>{item.title}</p>
            </NavLink>
            <Form id={item._id} />
            <hr />
          </article>
        ));
      }
    }
  }
  
  export default PortfolioPage;