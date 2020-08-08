package com.qudini.service.integration.spreedly.rest.client.gateway.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PublicGateways {

    public List<PublicGateway> gateways;
}
