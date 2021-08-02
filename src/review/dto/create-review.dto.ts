import { IObjectWithTypegooseName } from '@typegoose/typegoose/lib/types';

export class CreateReviewDto {
	name: string;
	title: string;
	description: string;
	rating: number;
	productId: string;
	typegooseName: IObjectWithTypegooseName;
}