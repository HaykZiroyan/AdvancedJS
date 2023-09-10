/*
Write Pagination object that will get an array and pageSize, then will return the following.
    prevPage
    nextPage
    firstPage
    lastPage
    goToPage
    getPageItems
 */

const Pagination = {
    newArr : [], 
    currentPage: 0,
    init: function (str, counts) {
        this.newArr.length = Math.ceil(str/counts)
        for(let i = 0; i <= this.newArr.length; i++ ) {
            this.newArr[i] = []
            for(let j = 0; j < counts; j++) {
                if(!str[5 * i + j]) {
                    break
                }
                this.newArr[i][j] = str[5 * i + j]
            } 
        }
    },
    getPageItems:function  () {
        return this.newArr[this.currentPage]
    },
    nextPage: function() {
        if(this.currentPage < this.newArr.length - 1) {
            return this.currentPage++;
        }
        return this
    },
    firstpage: function () {
         this.currentPage = 0
    },
    lastpage: function() {
        this.currentPage = this.newArr.length - 1
    },
    goToPage: function(n) {
        this.currentPage = n
    }
}
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
Pagination.getPageItems();
Pagination.nextPage();
Pagination.getPageItems();
Pagination.nextPage().nextPage();
Pagination.goToPage(3);
