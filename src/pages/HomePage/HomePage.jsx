import s from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={s.home}>
            <h2 className={s.welcome}>Welcome to the Phonebook App!</h2>
            <p className={s.here}>Here you can save your contacts</p>
        </div>
    )
}

export default HomePage;
