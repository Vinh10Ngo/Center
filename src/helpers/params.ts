import { Injectable } from '@nestjs/common';

@Injectable()
export class ParamsService {
  async listItems(params: any): Promise<any> {
    // copy params
    const queryFind = { ...params };

    let obj: any = {
        find: "",
        select: "",
        sort: {}
    };

    // Create fields to remove
    const removeFields = ['select', 'sort', 'page', 'limit'];

    // Remove fields
    removeFields.forEach((param) => delete queryFind[param]);

    // Create query string
    let queryStr = JSON.stringify(queryFind);

    // Replace
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (find) => `$${find}`);

    // Parse
    obj.find = JSON.parse(queryStr);

    // Select fields
    if (params.select) {
        obj.select = params.select.split(',').join(' ');
    }

    // Sort fields
    if (params.sort) {
        obj.sort = params.sort.split(',').join(' ');
    }

    // Pagination
    const page = parseInt(params.page, 10) || 1;
    const limit = parseInt(params.limit, 10) || 3;
    const skip = (page - 1) * limit;

    

    return obj;
  }
}
