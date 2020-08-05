package com.qudini.integration.spreedly.rest.client.gateway.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Gateway {

    @JsonProperty("gateway_type")
    public String gatewayType;

    public String name;

    @JsonProperty("company_name")
    public String companyName;

    @JsonProperty("auth_modes")
    public List<AuthMode> authModes;


}
