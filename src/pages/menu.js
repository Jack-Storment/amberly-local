import React from 'react'
import Layout from '../components/Layout'
import AmberlyLogo from '../img/amberlylocal.png'
export const MenuPageTemplate = () => {
  return ( <
    div >
    <
    img src = {
      AmberlyLogo
    }
    style = {
      {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "10%"
      }
    }
    /> <
    div className = "container"
    style = {
      styles.menuContainer
    } >
    <
    div className = "row"
    style = {
      {
        width: "50%"
      }
    } >
    <
    div className = "columns" >
    <
    div className = "column is-2"
    style = {
      {
        width: "50%"
      }
    } >
    <
    MenuHeader title = "Boards & Bites" / >
    <
    MenuItem name = "Meat"
    price = {
      16
    }
    description = "cured meats, mustard, jelly, bread" / >
    <
    MenuItem name = "Cheese"
    price = {
      16
    }
    description = "variety of local cheeses, jelly, crackers" / >
    <
    MenuItem name = "Meat & Cheese"
    price = {
      24
    }
    description = "cured meats, variety of cheeses, jellies, crackers, bread" / >
    <
    MenuItem name = "Hummus-Plain or Roasted Red Pepper"
    price = {
      6
    }
    description = "Pita chips" / >
    <
    MenuItem name = "Tzatziki Sauce"
    price = {
      7
    }
    description = "Pita chips" / >
    <
    MenuItem name = "Bavarian Pretzel"
    price = {
      2.50
    }
    /> <
    MenuItem name = "Pickle Plate"
    price = {
      2
    }
    /> <
    MenuHeader title = "Sandwiches"
    description = "served with your choice of dressed greens or kettle cooked chips (Sea salt, Salt & Vinegar, BBQ).&#013; Want to add cheese? Cheddar, Muenster, Swiss &#013; Make any cold sandwitch a wrap! Spinach, Tomato, Garlic" / >
    <
    MenuItem name = "Patrami (The BIG one)"
    description = "pastrami, mustard"
    price = {
      16
    }
    /> <
    MenuItem name = "Patrami (The LITTLE one)"
    description = "pastrami, mustard"
    price = {
      12
    }
    /> <
    MenuItem name = "Hot Ham & Swiss"
    description = "ham, swiss, house sauce"
    price = {
      10
    }
    /> <
    MenuItem name = "Grilled Gruyere"
    description = "gruyere, spinach"
    price = {
      9
    }
    /> <
    MenuItem name = "The Veggie"
    description = "tomato, lettuce, gruyere"
    price = {
      8
    }
    /> <
    MenuItem name = "Turkey"
    description = "turkey, house made avocado cilantro line sauce, lettuce, tomato"
    price = {
      11
    }
    /> <
    MenuItem name = "Roast Beef"
    description = "roast beef, tomato, arugula, house-made horseradish sauce"
    price = {
      13
    }
    /> <
    MenuItem name = "The Cuban"
    description = "ham, cuban pork, swiss, house-made pickles, mustard"
    price = {
      10
    }
    /> <
    /div> <
    div className = "column is-2"
    style = {
      {
        width: "50%"
      }
    } >
    <
    MenuHeader title = "Soup" / >
    <
    MenuItem name = "Broccoli & Cheddar"
    price = {
      5
    }
    /> <
    MenuItem name = "Beef & Bison Chili"
    price = {
      6
    }
    /> <
    MenuHeader title = "Salad" / >
    <
    MenuItem name = "Seasonal-Autumn Pear & Pecan"
    description = "mixed greens, pears, pecans, feta cheese, balsamic vinaigrette. Add protein - roast beef, turkey, pastrami, ham for $3"
    price = {
      8
    }
    /> <
    MenuHeader title = "Desserts" / >
    <
    MenuItem name = "Chocolate Caramel Brownie"
    price = {
      4
    }
    /> <
    MenuItem name = "Red Velvet Mini Cake"
    price = {
      4
    }
    /> <
    MenuHeader title = "Kids"
    description = "add chips and kid's fountain drink for $1.50" / >
    <
    MenuItem name = "Grilled cheese"
    price = {
      5
    }
    /> <
    MenuItem name = "Ham & Cheese"
    price = {
      5
    }
    /> <
    MenuItem name = "Turkey & Cheese"
    price = {
      5
    }
    /> <
    MenuItem name = "Meat & Cheese Board"
    price = {
      5
    }
    /> <
    MenuHeader title = "Snacks" / >
    <
    MenuItem name = "Mixed nuts"
    price = {
      2
    }
    /> <
    MenuItem name = "Gummy Bears"
    price = {
      1
    }
    /> <
    MenuItem name = "Peanuts"
    price = {
      1
    }
    /> <
    MenuItem name = "Pretzels"
    price = {
      1
    }
    /> <
    MenuHeader title = "Soft Drinks"
    description = "craft soda by Baylan Bottling Co." / >
    <
    MenuItem name = "Tea (Sweet, Unsweet)"
    price = {
      2.25
    }
    /> <
    MenuItem name = "Root Beer, Black Cherry, Orange, Cane Cola, Diet Cola, Lemonade (noncarbonated)"
    price = {
      2.25
    }
    /> <
    /div> <
    /div> <
    /div> <
    /div>    <
    /div>

  )
}

const MenuHeader = (props) => {
    return ( < div >
      <
      div style = {
        styles.header
      } > {
        props.title
      } <
      /div> <
      div style = {
        {
          fontStyle: "italic",
          fontSize: "small"
        }
      } > {
        props.description
      } <
      /div> <
      /div>)
    }

    const MenuItem = (props) => {
      return ( < div >
        <
        p style = {
          {
            float: "left"
          }
        } > {
          props.name
        } < /p> <
        p style = {
          {
            float: "right"
          }
        } > $ {
          props.price
        } < /p> <
        br / >
        <
        p style = {
          {
            fontStyle: "italic",
            fontSize: "small"
          }
        } > {
          props.description
        } < /p> <
        /div>
      )
    }
    const styles = {
      header: {
        fontWeight: "bold",
        fontFamily: "Lulo",
        textDecoration: "underline",
      },
      menuContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }

    // MenuPageTemplate.propTypes = {
    //   title: PropTypes.string.isRequired,
    //   content: PropTypes.string,
    //   contentComponent: PropTypes.func,
    // }

    const MenuPage = () => {
      return ( <
        Layout >
        <
        MenuPageTemplate /
        >
        <
        /Layout>
      )
    }

    export default MenuPage;