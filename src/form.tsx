export default function Form1(){
    return(
        <div>
            <h2>Request Press on Nails!</h2>
            <b>Do you want me to make you a set of press ons? Fill out the form below!</b>
            <br/><br/>
            <form>
                <label htmlFor="fullname"> Enter your full name: </label>
                <input type="text" id="fullname" name="fullname"/>
                <br/>
                <label htmlFor="email"> Enter your email: </label>
                <input type="text" id="email" name="email"/>
                <br/><br/>
                Nail Accessories
                <br/>
                <input type="checkbox" id="rhinestones"/>
                <label htmlFor="rhinestones">Rhinestones</label>
                <br/>
                <input type="checkbox" id="chrome"/>
                <label htmlFor="chrome">Chrome</label>
                <br/>
                <input type="checkbox" id="pearls"/>
                <label htmlFor="pearls">Pearls</label>
                <br/><br/>
                Choose Your Nail Shape
                <br/>
                <input type="radio" name="nailshape" id="almond"/>
                <label htmlFor="almond">Almond</label>
                <br/>
                <input type="radio" name="nailshape" id="stiletto"/>
                <label htmlFor="stiletto">Stiletto</label>
                <br/>
                <input type="radio" name="nailshape" id="coffin"/>
                <label htmlFor="coffin">Coffin</label>
                <br/><br/>
                <label htmlFor="comments">Enter a detailed description of the design you want and any comments:</label>
                <br/><br/>
                <textarea rows={2} cols={5} id="comments"></textarea>
                <br/><br/>
                <label htmlFor="Nail Designs">Choose a nail design</label>
                <select name="Nail Designs" id="Nail Designs">
                    <option value="choose">Basic color</option>
                    <option value="choose">French Tip</option>
                    <option value="choose">Jelly Nails</option>
                    <option value="choose">Blooming Gel</option>
                    <option value="choose">3D Nails</option>
                </select>
                <br/>
                <p>Submit your request!</p>
                <br/>
                <input type="submit" value="Submit" id="submit button"/>
                <br/>
            </form>
        </div>
    );
}