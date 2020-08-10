package com.qudini.service.integration.spreedly.rest.client.gateway;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.qudini.service.integration.spreedly.rest.client.gateway.domain.AuthenticatedGatewaysResponse;
import com.qudini.service.integration.spreedly.rest.client.gateway.domain.GatewayRequest;
import com.qudini.service.integration.spreedly.rest.client.gateway.domain.GatewayResponse;
import com.qudini.service.integration.spreedly.rest.client.gateway.domain.PublicGatewaysResponse;
import com.qudini.service.integration.spreedly.rest.mappers.ToGatewayRequestMapper;
import com.qudini.service.integration.spreedly.rest.payload.MerchantGatewayPayload;
import com.qudini.service.merchant.Merchant;
import com.qudini.service.merchant.MerchantGateway;
import com.qudini.service.merchant.MerchantGatewayRepository;
import com.qudini.service.merchant.MerchantRepository;
import io.smallrye.mutiny.Uni;
import io.smallrye.mutiny.tuples.Tuple2;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/gateways")
public class GatewayResource {

    private final Logger log = LoggerFactory.getLogger(GatewayResource.class);

    @Inject
    @RestClient
    GatewayService gatewayService;

    @Inject
    MerchantRepository merchantRepository;

    @Inject
    MerchantGatewayRepository merchantGatewayRepository;


    @Inject
    ObjectMapper objectMapper;


    @GET
    @Path("/supported")
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<PublicGatewaysResponse> listSupportedGateways() {
        return gatewayService.listSupportedGateways();
    }

    @GET
    @Path("/created")
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<AuthenticatedGatewaysResponse> listCreatedGateways() {
        return gatewayService.listCreatedGateways();
    }

    @GET
    @Path("/{token}")
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<GatewayResponse> getCreatedGateway(@PathParam("token") String token) {
        return gatewayService.showGateway(token);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Uni<GatewayResponse> createMerchantGateway(MerchantGatewayPayload merchantGatewayPayload) {
        log.info(" Merchant Gateway Payload {}", merchantGatewayPayload);

        GatewayRequest gatewayRequest = ToGatewayRequestMapper.map(merchantGatewayPayload);

        log.info(" Merchant Gateway Request {}", gatewayRequest);

        return gatewayService.createGateway(gatewayRequest)
                .onItem().produceUni(gatewayResponse -> persistMerchantGateway(merchantGatewayPayload, gatewayResponse))
                .onItem().produceUni(tuple2Uni -> Uni.createFrom().item(tuple2Uni.getItem1()));
    }

    private Uni<Tuple2<GatewayResponse, MerchantGateway>> persistMerchantGateway(
            MerchantGatewayPayload merchantGatewayPayload,
            GatewayResponse gatewayResponse) {
        MerchantGateway merchantGateway = new MerchantGateway();
        Merchant merchant = merchantRepository.findById(merchantGatewayPayload.qudiniMerchantId);
        merchantGateway.setToken(gatewayResponse.gateway.token);
        merchantGateway.setGatewayType(gatewayResponse.gateway.gatewayType);
        merchantGateway.setMerchant(merchant);
        try {
            merchantGateway.setGatewayJson(objectMapper.writeValueAsString(gatewayResponse.gateway));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        merchantGatewayRepository.persist(merchantGateway);
        return Uni.createFrom().item(Tuple2.of(gatewayResponse, merchantGateway));
    }

}
