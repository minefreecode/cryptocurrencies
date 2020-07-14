import React from "react"

export default function Header() {
    return <header className="bg-primary text-white">
        <div className="container text-center">
            <img width="125" height="125" src="/image/336320.png" alt="..." className="rounded-circle"/>
            <h1>Криптовалюты</h1>
        </div>
    </header>
}

Header.displayName = 'HomePageHeader'
