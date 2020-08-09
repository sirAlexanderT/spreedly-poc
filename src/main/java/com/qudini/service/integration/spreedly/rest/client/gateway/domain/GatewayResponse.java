package com.qudini.service.integration.spreedly.rest.client.gateway.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class GatewayResponse {

    public AuthenticatedGateway gateway;



}
