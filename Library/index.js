// The purpose of this code is to organize and manage books and movies in a standardized way, 
// with the ability to add ratings, track checkout status, and calculate average ratings.



class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
  
    }
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
  
    set isCheckedOut(newIsCheckedOut) {
      this._isCheckedOut = newIsCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
  
  
   toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
      
      getAverageRating() {
    const totaal = this._ratings.reduce((sum, rating) => sum + rating, 0);
    return this._ratings.length === 0 ? 0 : totaal / this._ratings.length;
  }
  
  addRating(newRating) {
    this._ratings.push(newRating);
  
  }
  
    }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title)
      this._pages = pages;
      this._author = author;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
    class Movie extends Media {
      constructor(director, title, runTime) {
        super(title)
        this._director = director;
        this._runTime = runTime;
      }  
  
      get director() {
        return this._director;
      }
  
      get runTime() {
        return this._runTime;
      }
  
    }
  
    
    const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
  
    const speed = new Movie("Jan de Bont", "Speed", 116);
  
    historyOfEverything.toggleCheckOutStatus();
    speed.toggleCheckOutStatus();
  
  
    historyOfEverything.addRating(4);
    historyOfEverything.addRating(5);
    historyOfEverything.addRating(5);
    historyOfEverything.getAverageRating();
  
    speed.addRating(1);
    speed.addRating(1);
    speed.addRating(5);
    speed.getAverageRating();
  
  
  
    
  
    console.log(historyOfEverything.isCheckedOut);
  
    console.log(historyOfEverything.getAverageRating());
  
    console.log(speed.isCheckedOut);
  
    console.log(speed.getAverageRating());
    
  
  
  