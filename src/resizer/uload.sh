#!/bin/bash

S3_ROOT_DIR="xeniaklimova-library/public/p800-img"

#aws s3 cp ./p800-img/graphics "s3://${S3_ROOT_DIR}/graphics/"  --recursive
#aws s3 cp ./p800-img/sketches "s3://${S3_ROOT_DIR}/sketches/"  --recursive
#aws s3 cp ./p800-img/paintings-gouache "s3://${S3_ROOT_DIR}/paintings-gouache/"  --recursive
#aws s3 cp ./p800-img/paintings-watercolors "s3://${S3_ROOT_DIR}/paintings-watercolors/"  --recursive
aws s3 cp ./p800-img/paintings-oils "s3://${S3_ROOT_DIR}/paintings-oils/"  --recursive

