class APIfeatures{
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;
    }
    

    search(){
        const keyword = this.queryString.keyword ?{
            title:{
                $regex:this.queryString.keyword,
                $options:'i'
                
            }
        }:{}
        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const QueryCopy = {...this.queryString};
        const removeFields = ['keyword','limit','page'];
        removeFields.forEach(param => delete QueryCopy[param]);

        let queryStr = JSON.stringify(QueryCopy);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);


        this.query = this.query.find(QueryCopy);
        return this;
    }
    pagination(ResultsPerPage){
        const page = this.queryString.page * 1 || 1;
        const skip = (page - 1) * ResultsPerPage;
        this.query = this.query.limit(ResultsPerPage).skip(skip);
        return this;
    }
}
module.exports = APIfeatures;