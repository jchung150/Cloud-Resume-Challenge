variable "domain_name" {
  description = "domain name"
}

variable "hosted_zone" {
  default     = null
  description = "Route53 hosted zone"
}

variable "acm_certificate_domain" {
  default     = null
  description = "Domain of the ACM certificate"
}

variable "price_class" {
  default     = "PriceClass_All"
  description = "CloudFront distribution price class"
}

variable "use_default_domain" {
  default     = false
  description = "Use CloudFront website address without Route53 and ACM certificate"
}

variable "cloudfront_min_ttl" {
  default     = 0
  description = "The minimum TTL for the cloudfront cache"
}

variable "cloudfront_default_ttl" {
  default     = 86400
  description = "The default TTL for the cloudfront cache"
}

variable "cloudfront_max_ttl" {
  default     = 31536000
  description = "The maximum TTL for the cloudfront cache"
}

variable "cloudfront_geo_restriction_restriction_type" {
  default     = "none"
  description = "The method that you want to use to restrict distribution of your content by country: none, whitelist, or blacklist."
  validation {
    error_message = "Can only specify either none, whitelist, blacklist"
    condition     = can(regex("^(none|whitelist|blacklist)$", var.cloudfront_geo_restriction_restriction_type))
  }
}

variable "cloudfront_geo_restriction_locations" {
  default     = []
  description = "The ISO 3166-1-alpha-2 codes for which you want CloudFront either to distribute your content (whitelist) or not distribute your content (blacklist)."
  validation {
    error_message = "must be a valid ISO 3166-1-alpha-2 code"
    condition     = length(var.cloudfront_geo_restriction_locations) == 2
  }
}