package com.qudini.service.integration.spreedly.rest.payload;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.qudini.service.integration.Payload;

import java.util.Map;
import java.util.StringJoiner;

@JsonIgnoreProperties(ignoreUnknown = true)
public class MerchantGatewayPayload implements Payload {

    public long qudiniMerchantId;

    public String gatewayType;

    public Map<String, String> gatewayCredentials;

    @Override
    public String toString() {
        return new StringJoiner(", ", MerchantGatewayPayload.class.getSimpleName() + "[", "]")
                .add("qudiniMerchantId=" + qudiniMerchantId)
                .add("gatewayType='" + gatewayType + "'")
                .toString();
    }
}
