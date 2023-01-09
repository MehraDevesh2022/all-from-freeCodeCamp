import CallOut from "./component/CallOut";
import "./component/style.css"

function App() {


  return (
    <>
      <main>  
        {/* reusing component with diffrent value as children */}
        <h1>Welcome!</h1>
        <CallOut>
          <header>Don't miss out!</header>
          <h4>
            Unless you don't suffer from FOMO, you better make sure you fill out
            the email form below!"
          </h4>
        </CallOut>

        <p>
          This is probably the best site you've ever come across. I'm glad
          you're here to witness the magnificence of this website right now.
        </p>

        <CallOut
        // img={"https://picsum.photos/id/102/4320/3240"}
        // caption="Just look at those sparkling raspberries!"
        >
          <img src="https://picsum.photos/id/102/4320/3240" alt="fig-img"  width={'40%'} height ={'90%'}/>
          <figcaption>Just look at those sparkling raspberries!</figcaption>
        </CallOut>

        <p>
          Here's some more unforgettable content. Lorem ipsum something or
          other.
        </p>

        <CallOut
          // header="Give us your email. We definitely won't sell it to anyone."
          // btnText="Sign me up!"
        >
          <header>
            Give us your email. We definitely won't sell it to anyone
          </header>
          <input type="email" placeholder="enter email" id="email" />
          <button>Sign me up!</button>
        </CallOut>
      </main>
    </>
  );
}

export default App;
