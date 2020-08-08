package com.qudini.integration.spreedly.rest.client.config;

import io.quarkus.arc.config.ConfigProperties;
import org.eclipse.microprofile.config.inject.ConfigProperty;

@ConfigProperties(prefix = "spreedly")
public interface SpreedlyConfiguration {

    @ConfigProperty(name = "environment-key")
    String getEnvironmentKey();

    @ConfigProperty(name = "access-secret")
    String getAccessSecret();

}
