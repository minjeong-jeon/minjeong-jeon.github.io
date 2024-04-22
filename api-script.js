/**
 * Fetch news info.
 */
async function fetchNews(query, yyyy,mm,dd) {
    try {
      // Get a list of Pokemon numbered 0-150
      const response = await fetch(
        "https://newsapi.org/v2/everything?q="+query+"&from="+yyyy+"-"+mm+"-"+dd+"&sortBy=popularity&apiKey=81e63e592278490b93473b4b15734884"
      );
      const data = await response.json();
      return data;
      //Error handling
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getNews() {
    
    const query = document.getElementById("searchbar").value;
    const date = document.getElementById("date").value;
    console.log(date)
    const yyyy=date.split("-")[0];
    const mm=date.split("-")[1];
    const dd=date.split("-")[2];
    const data = await fetchNews(query, yyyy,mm,dd);
    console.log(data);
    if (data) {
      renderOption2Results(data);
    }
  }
  
  /**
   * Option 2 enhanced
   */
  function renderOption2Results(data) {
    console.log(data.articles);
  
    const cards = createCardElements(data.articles.map((item)=>({
      title: item.title,
      author: item.author,
      date:item.publishedAt,
      description: item.description,
    }))
    );
    document.getElementById("option-1-results").innerHTML = cards;
  }
  
  /**
   * Create one card from item data.
   */
  function createCardElement(item) {
    return `
        <li class="card">
            <div class="header">
                <p class="title">
                    ${item.title}
                </p>
                <p class="author">
                    Author: ${item.author} at ${item.date.slice(0,10)}
                </p>
                <p class="description">
                    ${item.description}
                </p>
  
            </div>
        </li>
      `;
  }
  
  /**
   * Create multiple cards from array of item data.
   */
  function createCardElements(data) {
    return data.map(createCardElement).join("");
  }
  
  /**
   * Attach an event listener to the submit button for the Option 1 dropdown list.
   */
  const option1SubmitButton = document.getElementById("submit-button");
  option1SubmitButton.addEventListener("click", getNews);