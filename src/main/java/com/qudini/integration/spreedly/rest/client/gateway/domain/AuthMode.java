package com.qudini.integration.spreedly.rest.client.gateway.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AuthMode {

    @JsonProperty("auth_mode_type")
    public String authModeType;

    public String name;

    public List<Credential> credentials;
}
