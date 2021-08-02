import { Injectable } from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {ProductModel} from './product.model';
import {ModelType, DocumentType} from '@typegoose/typegoose/lib/types';

@Injectable()
export class ProductService {
	constructor(@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>) {}

	// async create(dto: {}): Promise<DocumentType<ProductModel>> {
	// 	return this.productModel.create(dto);
	// }
}
