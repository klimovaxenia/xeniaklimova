#!/bin/bash

S3_ROOT_DIR="xeniaklimova-library/public/pictures"

#aws s3 cp "s3://${S3_ROOT_DIR}/graphics" ./full-size-img/graphics --recursive
#aws s3 cp "s3://${S3_ROOT_DIR}/sketches" ./full-size-img/sketches --recursive
#aws s3 cp "s3://${S3_ROOT_DIR}/paintings-gouache" ./full-size-img/paintings-gouache --recursive
#aws s3 cp "s3://${S3_ROOT_DIR}/paintings-watercolors" ./full-size-img/paintings-watercolors --recursive
aws s3 cp "s3://${S3_ROOT_DIR}/paintings-oils" ./full-size-img/paintings-oils --recursive

