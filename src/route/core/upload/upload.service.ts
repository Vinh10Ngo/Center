// src/upload/upload.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { join } from 'path';
import { writeFileSync } from 'fs';
import * as XLSX from 'xlsx'
import { S3 } from 'aws-sdk'

@Injectable()
export class UploadService {
 
  async upload(file) {
    let dataImage
    const { originalname } = file;
    const bucketS3 = 'center123456';
    await this.uploadS3(file.buffer, bucketS3, originalname).then((data: any)=>{
        dataImage = data
    });
    return dataImage;
}

async uploadS3(file, bucket, name) {
    const s3 = this.getS3();
    const params = {
        Bucket: bucket,
        Key: String(name),
        Body: file,
    };
    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
        if (err) {
            Logger.error(err);
            reject(err.message);
        }  
        resolve(data);
        });
    });

}

getS3() {
    return new S3({
        accessKeyId: process.env.AccessKeyId,
        secretAccessKey: process.env.SecretAccessKey,
    });
}
}
