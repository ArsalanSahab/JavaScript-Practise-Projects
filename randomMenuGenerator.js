const menu = {
  
    _courses: {
      
      appetizers: [],
      mains: [],
      desserts: [],
      
    },
    
    get appetizers(){},
    set appetizers(appetizer){},
    get mains(){},
    set mains(main){},
    get desserts(){},
    set desserts(dessert){},  
    
    get _courses(){
      return {
        
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
      
    },
    
    addDishToCourse(courseName, dishName, dishPrice) {
      
      let dish = {
        
        name: dishName,
        price: dishPrice,
      }
      
      this._courses.courseName = dish;
      
      
    },
    
    getRandomDishFromCourse(courseName){
      
      const dishes = this._courses[courseName];
      
      const index = Math.floor(Math.random() * dishes.length);
      
      return dishes[index]
      
    },
    
    generateRandomMeal(){
      
      let appetizer = this.getRandomDishFromCourse(appetizers);
      let main = this.getRandomDishFromCourse(main);
      let dessert = this.getRandomDishFromCourse(dessert);
      
      const totalPrice = appetizer.price + main.price + dessert.price ;
      
      return `You Ordered ${appetizer.name}, ${main.name} and ${dessert.name}; total = ${totalPrice}`
      
    },
    
  };
  
  
  
  menu.addDishToCourse('appetizers', 'Green Salad', 5);
  menu.addDishToCourse('appetizers', 'Red Salad', 10);
  menu.addDishToCourse('appetizers', 'Blue Salad', 15);
  menu.addDishToCourse('mains', 'Green  Beef', 5);
  menu.addDishToCourse('mains', ' Red Beef', 25);
  menu.addDishToCourse('mains', 'Blue Beef', 15);
  menu.addDishToCourse('desserts', 'Green', 5);
  menu.addDishToCourse('desserts', 'Blue', 5);
  menu.addDishToCourse('desserts', 'Red', 5);
  
  
  let meal = menu.generateRandomMeal();
  
  console.log(meal); 
  
  