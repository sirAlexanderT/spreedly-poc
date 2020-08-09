package com.qudini.service.integration.spreedly.rest.mappers;

import com.qudini.service.integration.spreedly.rest.client.gateway.domain.GatewayRequest;
import com.qudini.service.integration.spreedly.rest.payload.MerchantGatewayPayload;

import java.util.HashMap;
import java.util.Map;

public class ToGatewayRequestMapper {

    public static GatewayRequest map(MerchantGatewayPayload merchantGatewayPayload) {
        Map<String, Object> mappedvalues = new HashMap<>();
        mappedvalues.put("gateway_type", merchantGatewayPayload.gatewayType);
        mappedvalues.putAll(merchantGatewayPayload.gatewayCredentials);
        return new GatewayRequest(mappedvalues);
    }
}
