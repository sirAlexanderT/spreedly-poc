package com.qudini.service.integration.spreedly.rest.client.gateway;

import com.qudini.service.integration.spreedly.rest.client.gateway.domain.AuthenticatedGateways;
import com.qudini.service.integration.spreedly.rest.client.gateway.domain.PublicGateways;
import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.config.ConfigProvider;
import org.eclipse.microprofile.rest.client.annotation.ClientHeaderParam;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.Base64;

@Path("/v1")
@Singleton
@RegisterRestClient(configKey = "spreedly-gateway-api")
public interface GatewayService {

    @GET
    @Path("/gateways_options.json")
    @Produces("application/json")
    Uni<PublicGateways> listSupportedGateways();

    @GET
    @Path("/gateways.json")
    @Produces("application/json")
    @ClientHeaderParam(name = "Authorization", value = "{generateAuthHeader}")
    Uni<AuthenticatedGateways> listCreatedGateways();


    default String generateAuthHeader() {
        final String spreedlyEnvironmentKey = ConfigProvider.getConfig().getValue("spreedly.environment-key", String.class);
        final String spreedlyAccessSecret = ConfigProvider.getConfig().getValue("spreedly.access-secret", String.class);
        return "Basic " + Base64
                .getEncoder()
                .encodeToString(
                        String.format("%s:%s", spreedlyEnvironmentKey, spreedlyAccessSecret).getBytes()
                );
    }
}
