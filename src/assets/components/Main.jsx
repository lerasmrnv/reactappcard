import React from "react";
import Table_words from "./Table_words";
import ItemCard from "./ItemCard";

export default function Main() {
    return (
        <div className="mainContainer">
            <Table_words></Table_words>
            <ItemCard></ItemCard>
        </div>
    )
}
