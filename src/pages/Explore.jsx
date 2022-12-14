import React from "react";
import Cards from "../components/explorePageComponents/Cards";
import SideBar from "../components/explorePageComponents/SideBarMenu";
import people from "../JSON files/people";
import animal from "../JSON files/animals";
import food from "../JSON files/food";
import activity from "../JSON files/activity";
import travel from "../JSON files/travel";
import flags from "../JSON files/flags";
import symbols from "../JSON files/symbols";
import object from "../JSON files/object";

people.reverse();
animal.reverse();
food.reverse();
activity.reverse();
travel.reverse();
flags.reverse();
symbols.reverse();
object.reverse();

function Explore() {
  return (
    <>
      <div className="EXPLORE-MAIN-CONTAINER">
        <SideBar
          people={"#people"}
          animal={"#animal"}
          food={"#food"}
          activity={"#activity"}
          travel={"#travel"}
          flags={"#flags"}
          symbols={"#symbols"}
          object={"#object"}
        />
        <div className="EXPLORE-MID-CONTAINER">
          <h1 className="EXPLORE-CATEGORY-HEADING" id="people">
            People
          </h1>
          <section className="EXPLORE-CARD-CONTAINER">
            {people.map(function (object) {
              return (
                <Cards
                  emoji={object.emoji}
                  eName={object.emojiName.substring(2)}
                  eDescription={object.description}
                />
              );
            })}
          </section>
          <h1 className="EXPLORE-CATEGORY-HEADING" id="animal">
            Animal and Nature
          </h1>
          <section className="EXPLORE-CARD-CONTAINER">
            {animal.map(function (object) {
              return (
                <Cards
                  emoji={object.emoji}
                  eName={object["emojiName"].substring(2)}
                  eDescription={object.description}
                />
              );
            })}
          </section>
          <h1 className="EXPLORE-CATEGORY-HEADING" id="food">
            Foods and Drinks
          </h1>
          <section className="EXPLORE-CARD-CONTAINER">
            {food.map(function (object) {
              return (
                <Cards
                  emoji={object.emoji}
                  eName={object["emojiName"].substring(2)}
                  eDescription={object.description}
                />
              );
            })}
          </section>
          <h1 className="EXPLORE-CATEGORY-HEADING" id="activity">
            Activity
          </h1>
          <section className="EXPLORE-CARD-CONTAINER">
            {activity.map(function (object) {
              return (
                <Cards
                  emoji={object.emoji}
                  eName={object["emojiName"].substring(2)}
                  eDescription={object.description}
                />
              );
            })}
          </section>
          <h1 className="EXPLORE-CATEGORY-HEADING" id="travel">
            Travel and Places
          </h1>
          <section className="EXPLORE-CARD-CONTAINER">
            {travel.map(function (object) {
              return (
                <Cards
                  emoji={object.emoji}
                  eName={object["emojiName"].substring(2)}
                  eDescription={object.description}
                />
              );
            })}
          </section>
          <h1 className="EXPLORE-CATEGORY-HEADING" id="flags">
            Flags
          </h1>
          <section className="EXPLORE-CARD-CONTAINER">
            {flags.map(function (object) {
              return (
                <Cards
                  emoji={object.emoji}
                  eName={object["emojiName"]}
                  eDescription={object.description}
                />
              );
            })}
          </section>
          <h1 className="EXPLORE-CATEGORY-HEADING" id="symbols">
            Symbols
          </h1>
          <section className="EXPLORE-CARD-CONTAINER">
            {symbols.map(function (object) {
              return (
                <Cards
                  emoji={object.emoji}
                  eName={object["emojiName"].substring(2)}
                  eDescription={object.description}
                />
              );
            })}
          </section>
          <h1 className="EXPLORE-CATEGORY-HEADING" id="object">
            Objects
          </h1>
          <section className="EXPLORE-CARD-CONTAINER">
            {object.map(function (object) {
              return (
                <Cards
                  emoji={object.emoji}
                  eName={object["emojiName"].substring(2)}
                  eDescription={object.description}
                />
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}

export default Explore;
