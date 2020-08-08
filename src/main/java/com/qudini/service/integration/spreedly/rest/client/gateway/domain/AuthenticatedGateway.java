package com.qudini.service.integration.spreedly.rest.client.gateway.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AuthenticatedGateway {

    public String token;

    @JsonProperty("gateway_type")
    public String gatewayType;

    public String name;

    public String description;

    public String state;

    @JsonProperty("payment_methods")
    public List<String> paymentMethods;


}
