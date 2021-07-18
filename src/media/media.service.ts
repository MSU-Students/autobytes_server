import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Media, MediaDocument } from 'src/schemas/media.schema';

@Injectable()
export class MediaService {
    constructor(@InjectModel(Media.name) private mediaModel: Model<MediaDocument>) { }
    async create(media: Media): Promise<Media> {
        const doc = await this.mediaModel.create(media)
        return {
            id: doc._id,
            filename: media.filename,
            mimeType: media.mimeType,
            content: undefined 
        }
    }
    async findById(id: string): Promise<Media> {
        return this.mediaModel.findById(id).exec();
    }
}
