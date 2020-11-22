//if doing one js file for all doesnt work, then do what we did in a06 and have a controller.js for each html doc

//add in correct URL
//add in params
export const loadReviews = async function () {
    let result = await axios({
        method: 'get',
        url: "https://opal.ils.unc.edu/~cnfisher/franklin-street-eats/",
        withCredentials: true,
        params: {
            where: { 
                type: 'review' 
            }
        }
    });

    //here it is 3 times becaue we have 3 place holders
    //when we get more update the amount of reviews we want
    for(let i = 0; i < 3; i++)
    {
        if(i < result.data.length)
        {
            document.getElementById('postedReview'+i).innerText = result.data[i];
        }
        //within this place the results in each of the preset review spots and maybe append extra reviews depending on how we want to do it
    }
}

//do window.location.reload(false); whenever we call loadReviews or change any element of the page
//Also call this fucntion whenever we upload a tweet

//add in url to axios function
export const submitClicked = function() {
    composeReview(document.getElementById("textArea").value.toString());

    //$('#textArea').hide();
    //$('.composeButton').show();
    //$('.submitButton').hide();

    reload();
}

//add URL
export const composeReview = async function() {
    let bodyText = document.getElementById("textArea").value.toString();

   await axios({
       method: 'post',
       url: "https://opal.ils.unc.edu/~cnfisher/franklin-street-eats/",
       withCredentials: true,
       data: {
           type: 'review',
           body: bodyText
       }
   });

   loadReviews;

   window.location.reload(false);
 
}

$(document).on("click", "#sendreview", function () {
    composeReview();
});